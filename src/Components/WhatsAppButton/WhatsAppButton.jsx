import '../WhatsAppButton.css'

const WHATSAPP_URL =
  'https://wa.me/5584991316939?text=Oi%2C%20acabei%20de%20ver%20nosso%20app%21%20Eu%20te%20amo%21'

export default function WhatsAppButton() {
  return (
    <div className="">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        className="whatsapp-button"
        rel="noopener noreferrer"
      >
        <p className="whatsapp-paragraph">Me Lembre do Nosso Amor!</p>
      </a>
    </div>
  )
}
