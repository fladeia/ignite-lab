import { useState, FormEvent } from "react"
import { useNavigate } from "react-router-dom"
import { Footer } from "../components/Footer"
import { Logo } from "../components/Logo"
import { useCreateSubscriberMutation } from "../graphql/generated"

export const Subscribe = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [createSubscriber, { loading }] = useCreateSubscriberMutation()

  const handleSubscribe = async (event: FormEvent) => {
    event.preventDefault()

    await createSubscriber({
      variables: {
        name,
        email,
      }
    })

    navigate('/event')
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex flex-col items-center justify-between mx-auto mt-10 lg:mt-20 lg:px-2 lg:flex-row">
        <div className="max-w-[640px] text-center px-6 lg:px-0 lg:text-left">
          <Logo />
          <h1 className="mt-6 text-3xl leading-relaxed lg:text-[2.5rem] lg:mt-8">
            Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com  <strong className="text-blue-500">React</strong>
          </h1>
          <p className="my-6 text-gray-200 leading-relaxed text-sm lg:text-base lg:mt-4 lg:mb-0">
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>
        <div className="w-full bg-gray-700 border border-gray-500 p-8 lg:rounded lg:w-auto">
          <strong className="text-lg mb-6 block lg:text-2xl">Inscreva-se gratuitamente</strong>

          <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="Seu nome completo"
              onChange={(event) => setName(event.target.value)}
            />
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="email"
              placeholder="Digite seu e-mail"
              onChange={(event) => setEmail(event.target.value)}
            />

            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>

      <img src="https://ik.imagekit.io/ladeiaDev/image-background_z6AtRkcv1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656371634957" alt="imagem de fundo" className="py-6 lg:px-2" />

      <Footer />
    </div>
  )
}
function useCreateMutation(): [any, { loading: any }] {
  throw new Error("Function not implemented.")
}

