import emailjs from '@emailjs/browser'

export const sendEmail = async (payload) => {
    try {
      const response = await emailjs
      .send(
          'service_bldnvm7',
          'template_9xh4u64',
          payload,
          '9JCl-XSfl-UPqVgjv'
      )
      return response.text
    } catch (error) {
      console.log(error)
    }
}
