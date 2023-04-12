import { Express, Request, Response } from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { version } from "../../package.json";
import log from "./logger";

const options: swaggerJsdoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "REST API Docs",
            version,
        },
        schemes: ["http", "https"],
        // servers: [{ url: "http://localhost:1387/" }],
        // components: {
        //     securitySchemas: {
        //         bearerAuth: {
        //             type: "http",
        //             scheme: "bearer",
        //             bearerFormat: "JWT",
        //         },
        //     },
        // },
        // security: [
        //     {
        //         bearerAuth: [],
        //     },
        // ],
    },
    // apis: ["./src/routes/*.ts", "./src/schema/*.ts"],
    apis: ["./src/routes/*.{ts,js}",
        "./src/schema/*.{ts,js}",
        "./build/src/routes/*.{ts,js}",
        "./build/src/schema/*.{ts,js}",
        `${__dirname}/src/routes/*.{ts,js}`,
        `${__dirname}/src/schema/*.{ts,js}`,
    ]
};

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app: Express, port: number) {
    // Swagger page
    app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    // Docs in JSON format
    app.get("/docs.json", (req: Request, res: Response) => {
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpec);
    });

    log.info(`Docs available at http://localhost:${port}/docs`);
}

export default swaggerDocs;