import dynamic from 'next/dynamic'

const FormContact = dynamic(() => import('components/form/FormContact'), {
  ssr: true,
  loading: () => <div>Cargando formulario...</div>,
})

const ContactPage = () => {
  return <FormContact />
}

export default ContactPage
