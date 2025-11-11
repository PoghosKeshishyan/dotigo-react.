import './DomainTransfer.css';

export default function DomainTransfer({ pageData }) {
  return (
    <div className='DomainTransfer'>
      <h2>{pageData.domain_transfer_title}</h2>
      <p className='domain_transfer_descr'>{pageData.domain_transfer_descr}</p>

      <form className="transfer-form">
        <label htmlFor="transfer-input">{pageData.domain_transfer_label}</label>
        
        <div className='flex-center'>
          <input type="text" id='transfer-input' />
          <input type="submit" className='btn' value={pageData.domain_transfer_btn_text} />
        </div>
      </form>

      <div className="confirm_text">
        <img src="images/partials/icon-check-one.svg" alt="check"/>
        <p className='domain_transfer_client_message'>{pageData.domain_transfer_client_message}</p>
      </div>
    </div>
  )
}
