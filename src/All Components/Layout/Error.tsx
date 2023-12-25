import { useRouteError } from 'react-router-dom';
interface customError  { message?: string; data?: any }
const Error = () => {
    const error = useRouteError() as customError;
 

  return (
    <div>
        <div>
      <h1>Ooops!! Sorry, But something went wrong 😢.</h1>
      <p><strong>Message - {error.message || error.data}</strong></p>

    </div>
    </div>
  )
}

export default Error
