import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as iam from 'aws-cdk-lib/aws-iam';

export class SeconInstanceStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    // Create a VPC
    const vpc = new ec2.Vpc(this, 'MyVpc', {
      cidr: '10.0.0.0/16',
      natGateways: 1,
      maxAzs: 1,
      subnetConfiguration: [
        {
          cidrMask: 24,
          name: 'public',
          subnetType: ec2.SubnetType.PUBLIC,
        },
      ],
    });

    // Create a security group for the EC2 instance
    const sg = new ec2.SecurityGroup(this, 'NodeServerSG', {
      vpc,
      securityGroupName: "my-test-sg",
      allowAllOutbound: true,
      description: 'Security group for the Node.js server instance',
    });

    sg.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(22), 'SSH from anywhere');
    sg.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(80), 'HTTP from anywhere');
    sg.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(443), 'HTTPS from anywhere');

    const instanceRole = new iam.Role(this, 'MyInstanceRole', {
      assumedBy: new iam.ServicePrincipal('ec2.amazonaws.com'),
    });

    instanceRole.addToPolicy(new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      actions: [
        'ec2:CreateTags',
        "ec2-instance-connect:SendSSHPublicKey",//important
        'ec2:DescribeInstances',
        'ec2:DescribeTags',
        'ec2:ModifyInstanceAttribute',
        'ec2:StartInstances',
        'ec2:StopInstances',
        "ecr:GetAuthorizationToken",
        "ecr:BatchCheckLayerAvailability",
        "ecr:GetDownloadUrlForLayer",
        "ecr:BatchGetImage",
        "logs:CreateLogStream",
        "logs:PutLogEvents"
      ],
      resources: ['*'],
    }));


    // Define the environment variables
    // const envVars = {
    //   DB_URI: ''
    // };

    // Convert the environment variables to a string
    // const userData = ec2.UserData.forLinux();
    // userData.addCommands(
    //   `export VAR1=${envVars.DB_URI}`,

    // );
    const ec2Instance = new ec2.Instance(this, 'MyInstance', {
      instanceType: ec2.InstanceType.of(ec2.InstanceClass.T2, ec2.InstanceSize.MICRO),
      machineImage: ec2.MachineImage.latestAmazonLinux({
        generation: ec2.AmazonLinuxGeneration.AMAZON_LINUX_2,
      }),
      vpc,
      vpcSubnets: {
        subnetType: ec2.SubnetType.PUBLIC,
      },
      securityGroup: sg,
      role: instanceRole,
      // userData: userData,
      keyName: 'renew'
    });


    ec2Instance.connections.allowFromAnyIpv4(ec2.Port.tcp(80), 'Allow HTTP access');

  }

}