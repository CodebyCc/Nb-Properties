function Grid({ children }) {
  return (
    <div className="grid items-center grid-cols-1 md:grid-cols-2 md:items-center gap-10 mb-4">
      {children}
    </div>
  );
}

export default Grid;
