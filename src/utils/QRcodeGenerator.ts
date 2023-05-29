import * as qrcode from 'qrcode';

// interface Options extends qrcode.QRCodeRenderersOptions{
//   type?: string,
//   quality?: number
// }

async function generateQRCodeWithUrl(url: string): Promise<void> {
  try {
    const qrCodeOptions: any = {
      type: 'png', // Output image type
      quality: 0.8, // Image quality (0.1 to 1.0)
      margin: 1, // QR code margin in modules
      color: {
        dark: '#000000', // Dark module color (hex code)
        light: '#ffffff' // Light module color (hex code)
      }
    };

    // Generate the QR code data URL
    const qrCodeDataUrl = await qrcode.toDataURL(url, qrCodeOptions);

    return qrCodeDataUrl
    
  } catch (error) {
    console.error('An error occurred:', error);
  }
}


export {generateQRCodeWithUrl};