import { useState,  } from 'react';
import { useNavigate } from 'react-router-dom';


const DeletePost = () => {
  const navigate = useNavigate()

  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = async () => {
    //запрос к API для удаления поста 
    setIsDeleted(true);
  };

  if (isDeleted) {
    navigate("/posts");
  }

  return (
    <div className='delete-container'>
      <h2>Вы уверены, что хотите удалить пост ?</h2>
      <button onClick={handleDelete} style={{margin:"20px"}}>Да, удалить</button>
      <button onClick={() => navigate(-1)}>Отмена</button>
    </div>
  );
};

export default DeletePost