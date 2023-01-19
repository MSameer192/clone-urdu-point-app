import React from 'react';
import { Link } from 'react-router-dom';
import blogImage from '../../assets/blogimg.jpg'
import './Blog.css'

export default function LargeBlog() {
    return (
        <section>
            <Link className=" mt-4 d-flex justify-content-end text-decoration-none">
                <div className="content w-25">
                    <div className="blog-title">
                        <p className="bg-black text-white bg-black bg-opacity-75 ps-1 d-flex align-items-center fs-5 fw-semibold mb-0">
                            زرمبادلہ ذخائر گرنے کے سلسلہ کو بریک لگ گئی
                        </p>
                    </div>
                    <div className="blog-content bg-dark bg-gradient bg-opacity-75 ps-1">
                        <p className='text-white'>
                        زرمبادلہ ذخائر گرنے کے سلسلہ کو بریک لگ گئی، 25 کروڑ ڈالرز کے اضافے سے سرکاری زرمبادلہ ذخائر ساڑھے 4 ارب ڈالرز کی سطح سے زائد ہو گئے۔ تفصیلات کے مطابق زرمبادلہ کے ذخائر258 ملین ڈالر اضافہ کے بعد 10.44 ارب ڈالر ہو گئے۔ سٹیٹ بینک کی جانب سے اس حوالہ سے جاری کردہ اعدادوشمارکے مطابق 13 جنوری ...
                        
                        <span>مزید</span>  
                        </p>
                    </div>
                </div>

                <div className="img">
                    <img src={blogImage} alt="blog-img" className='pe-auto' />
                </div>
            </Link>
        </section>
    );
}
