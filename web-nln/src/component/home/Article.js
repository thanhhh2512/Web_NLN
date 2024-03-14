import './Article.css'

export default function Article(){
    return (
        <div className="article-component">
          <div className="container-content">
            <h1>Bài viết</h1>
          </div>
          <div className="container-img">
            <img
              src={process.env.PUBLIC_URL + "/images/home/Group 487.png"}
              className="article-img"
            ></img>
          </div>
        </div>
      );
}