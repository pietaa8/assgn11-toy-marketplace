import img1 from '../../../assets/image/photo-1529335764857-3f1164d1cb24.jpeg'
import img2 from '../../../assets/image/photo-1523310636633-9778bc102895.jpeg'
import img3 from '../../../assets/image/photo-1658233427329-9d72b824e144.jpeg'

const Gallery = () => {
    return (
          
        <div>
          <h1 className='text-4xl text-center mt-5 font-bold font-serif'>Pupular In Store</h1>
          <p className='text-center font-sans text-lg'>Shop from Toys<span className='text-primary'>Store</span></p>
          <div className="carousel justify-center rounded-box mt-5 mb-5">
         
         <div className="carousel-item">
           
           <div className='image-container'>
             <img className='rounded' src={img1} alt="Pizza" />
             <div className="caption">
               <h1>Marvel</h1>
               <p>Best Toys</p>
             </div>
           </div>
         </div>
         <div className="carousel-item">
           <div className='image-container'>
             <img className='rounded' src={img2} alt="Pizza" />
             <div className="caption">
               <h1>Star Wars</h1>
               <p>Standard Quality</p>
             </div>
           </div>
         </div>
         <div className="carousel-item">
           <div className='image-container'>
             <img className='rounded' src={img3} alt="Pizza" />
             <div className="caption">
               <h1>Transformers</h1>
               <p>Kids Favorite</p>
             </div>
           </div>
         </div>
         <style>
           {`
             .carousel-item {
               margin-right: 50px;
             }
             .image-container {
               position: relative;
             }
             .image-container .caption {
               position: absolute;
               bottom: 0;
               font-size: 20px;
               font-weight: bold;
               left: 0;
               width: 100%;
               background-color: rgba(0, 0, 0, 0.7);
               padding: 10px;
             }
             .image-container .caption h1,
             .image-container .caption p {
               margin: 0;
               color: #fff;
               font-size: 14px;
               text-align: center;
             }
           `}
         </style>
       </div>
        </div>
        
    );
};

export default Gallery;