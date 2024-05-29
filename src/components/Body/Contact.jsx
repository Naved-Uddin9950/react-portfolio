import React from 'react'

function Contact() {
  return (
    <div className='p-4'>
      <h1 className='font-bold text-2xl border rounded text-center py-2 mb-6 shadow-md dark:text-white dark:bg-gray-900 dark:border-transparent'>Contact</h1>

      <table className='w-full table-auto text-left dark:text-white'>
        <tr>
          <td>Call</td>
          <td><a href="tel:+917023673273" target='_blank'>+91 7023673273</a></td>
        </tr>
        <tr>
          <td>Whatsapp</td>
          <td><a href="tel:+917023673273" target='_blank'>+91 7023673273</a></td>
        </tr>
        <tr>
          <td>Email</td>
          <td><a href="mailto:naveduddin83@gmail.com" target='_blank'>naveduddin83@gmail.com</a></td>
        </tr>
        <tr>
          <td>LinkedIn</td>
          <td><a href="https://www.linkedin.com/in/naved-uddin-800241195/" target='_blank'>https://www.linkedin.com/in/naved-uddin-800241195/</a></td>
        </tr>
        <tr>
          <td>Instagram</td>
          <td><a href="https://www.instagram.com/_n_a_v_e_d_99" target='_blank'>https://www.instagram.com/_n_a_v_e_d_99</a></td>
        </tr>
      </table>
    </div>
  )
}

export default Contact