import './WhatsAppButton.css'

import WHATSAPP_LOGO from '../../assets/icons/whatsapp-png.png'

const WHATSAPP_URL =
  'https://wa.me/5584991316939?text=Oi%2C%20acabei%20de%20ver%20nosso%20app%21%20Eu%20te%20amo%21'

export default function WhatsAppButton() {
  return (
    <div className="whatsapp-conteiner">
      <div className="whatsapp-texts">
        <h3 className="whatsapp-title">Mesmo estando longe,</h3>
        <p className="whatsapp-subtitle">
          cada dia, hora, minuto e segundo do nosso relacionamento está aqui,
          contado em tempo real, como um lembrete constante da nossa jornada.
        </p>
      </div>
      <div className="whatsapp-button-conteiner">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          className="whatsapp-button"
          rel="noopener noreferrer"
        >
          <img
            className="whatsapp-logo"
            src={WHATSAPP_LOGO}
            alt="Logo do Whatsapp"
          />
          <p className="whatsapp-paragraph">Me Lembre do Nosso Amor!</p>
        </a>
      </div>
    </div>
  )
}
