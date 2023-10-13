export default function ArticleSectionWrapper({ children }) {
  return (
    <div className="mt-12 flex flex-col items-center gap-24 py-20 sm:mt-0 sm:gap-16">
      {children}
    </div>
  );
}
