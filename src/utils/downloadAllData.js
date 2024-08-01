const downloadAllData = (files) => {
  const dataStr = JSON.stringify(files, null, 2);
  const blob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "source_codes.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

export default downloadAllData;
