export const mdxComponents = {
  Callout,
  // ...
};

function Callout({
  type = "info",
  children,
}: {
  type?: "info" | "warning" | "tip";
  children: React.ReactNode;
}) {
  const styles = {
    info: "border-blue-500 bg-blue-50 dark:bg-blue-950/30",
    warning: "border-yellow-500 bg-yellow-50 dark:bg-yellow-950/30",
    tip: "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30",
  };

  return (
    <div className={`border-l-4 rounded-r-lg p-4 my-4 text-sm ${styles[type]}`}>
      {children}
    </div>
  );
}

export { Callout };
