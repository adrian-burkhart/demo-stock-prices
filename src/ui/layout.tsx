export const LayoutUi = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="flex min-h-screen w-full flex-col items-center justify-center bg-black bg-[url('../images/hero-blur.svg')] bg-cover ">
        <div className="container flex flex-col items-center justify-center gap-12 ">
          {children}
        </div>
      </main>
    </>
  )
}
