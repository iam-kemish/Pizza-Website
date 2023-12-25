import { FormEvent, useContext } from 'react';
import { contextApi } from '../../Context/Context';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const { user, setUser,setUname } = useContext(contextApi);
  const navigate = useNavigate();

 

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setUser(user)
    setUname(true)
    navigate("/menu");
  };

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={user}
        onChange={(e) => setUser(e.target.value)} 
        className="input mb-8 w-72"
      />

      {user !== '' && (
        <div>
          <button className='btn'>Start ordering</button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
