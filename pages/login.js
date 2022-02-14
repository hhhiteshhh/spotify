import { getProviders, signIn as signIntoProvider } from 'next-auth/react'

function Login({ providers }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black  py-2 px-14 text-center">
      <img src="https://links.papareact.com/9xl" alt="" className="w-80" />
      <p className="font-xs mb-5 p-3 pb-0 italic text-white">
        This is not a REAL app, it is just a build for practice
      </p>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            className="rounded-lg bg-[#18d860] p-3 text-white"
            onClick={() => signIntoProvider(provider.id, { callbackUrl: '/' })}
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}{' '}
    </div>
  )
}

export default Login

export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: {
      providers,
    },
  }
}
