function AuthLayout({ title, children }) {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl mb-6">{title}</h1>
      {children}
    </main>
  )
}

export default AuthLayout
