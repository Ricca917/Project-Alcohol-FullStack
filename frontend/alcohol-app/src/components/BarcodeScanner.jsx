
export default function BarcodeScanner({ onDetected }) {
  useEffect(() => {
    Quagga.init(
      {
        inputStream: {
          name: "Live",
          type: "LiveStream",
          target: document.querySelector("#scanner-container"),
          constraints: {
            facingMode: "environment",
          },
        },
        decoder: {
          readers: ["ean_8_reader"],
        },
      },
      (err) => {
        if (err) {
          console.error(err);
          return;
        }
        Quagga.start();
      }
    );

    Quagga.onDetected((data) => {
      if (onDetected) onDetected(data.codeResult.code);
    });

    return () => {
      Quagga.stop();
      Quagga.offDetected();
    };
  }, []);

  return (
    <div id="scanner-container" style={{ width: "500px", height: "300px", border: "1px solid black" }} />
  );
}
