import './List.css';

function List(props) {

    return (
        <div>
            {props.bookResults.map((book) => {
            return (
                <div key={book.id}  className="card">
                    <h3 className="card-header"><a href={book.volumeInfo.canonicalVolumeLink}>{book.volumeInfo.title}</a></h3>
                    <div className="card-body">
                        {book.saleInfo.saleability ? 
                            <h4>Availablity: {book.saleInfo.saleability.replace(/_/g,' ')}</h4> :
                            <h3>No saleability</h3>
                        }
                        {book.volumeInfo.description ? 
                            <p className="card-desc">{book.volumeInfo.description}</p> :
                            <h3>No description</h3>
                        }
                        {book.volumeInfo.imageLinks.smallThumbnail ? 
                            <img className="card-img" src={book.volumeInfo.imageLinks.smallThumbnail} alt="book img"></img> :
                            <h3>No image to display</h3>
                        }
                  </div>
                </div>
              )
            })}
        </div>
    )
}

export default List;
