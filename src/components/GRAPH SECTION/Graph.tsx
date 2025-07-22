const Graph = ({ iframeSrc }: { iframeSrc: string }) => {
  return (
    <div className="w-full bg-gray-800 h-full p-2">
      <iframe
        src={iframeSrc}
        width="100%"
        height="100%"
        frameBorder="0"
        title="Grafana Graph"
        className="rounded-lg shadow-md"
      ></iframe>
    </div>
  );
};

export default Graph;
