import { CopyOutlined, EditOutlined  } from '@ant-design/icons';
import poster from "./poster.jpg"
import s from "./s.module.scss"


const Film = () => {
    return (
    <div>
        <div className={'col-6'}>
        <div className={s.Header}>
            <div className={s.Id}> Id:101 <CopyOutlined /></div>
            <div className={s.Edit}> <EditOutlined /> Редактировать </div>
        </div>
        <div className={s.Info}>
            <div className={s.imgBox}>
                <img src={poster} className={s.Poster} ></img>
            </div>
            <div className={s.InfoText}>
                <h1 className={s.Name}>Властелин колец: Кольца власти</h1>
                <div className={s.Autor}>Tim Burton</div>
                <div className={s.Parametrs}>Параметры</div>
            </div>
        </div>
        <div className={s.Description}>
            <h2 className={s.D1}>Описание</h2>
        </div>
        <div className={s.Rating}>
            Текущий рейтинг
        </div>
        </div>
    </div>

    );
  };
  
  export default Film;