import React from 'react';
import { Link } from 'react-router-dom';
import '../Categories/Category.css'

function Category() {
    return (
        <section id='category'>
            <ul className='d-flex category-list text-white bg-black bg-opacity-75 align-items-center' type='none'>
                <Link className=' text-decoration-none'><li className='ms-3 text-white d-flex fw-semibold px-2'>مرکزی صفحہ</li></Link>
                <Link className=' text-decoration-none'><li className='ms-3 text-white d-flex fw-semibold px-2'>اخبار</li></Link>
                <Link className=' text-decoration-none'><li className='ms-3 text-white d-flex fw-semibold px-2'>انٹرنیشنل</li></Link>
                <Link className=' text-decoration-none'><li className='ms-3 text-white d-flex fw-semibold px-2'>شاعری</li></Link>
                <Link className=' text-decoration-none'><li className='ms-3 text-white d-flex fw-semibold px-2'>بچے</li></Link>
                <Link className=' text-decoration-none'><li className='ms-3 text-white d-flex fw-semibold px-2'>خواتین</li></Link>

                <li className='dropdown ms-3 align-items-center d-flex fw-semibold' >
                    <button className='btn btn-default dropdown-toggle text-white fw-semibold dropbtn ' type="button" data-toggle="dropdown" data-hover="dropdown"> مزید <span className="caret"></span>


                        <ul className="dropdown-menu dropdown-content bg-black mt-2 rounded-0">
                            <li className="dropdown-item text-white "> اخبار </li>
                            <li className="dropdown-item text-white" >انٹرنیشنل</li>
                            <li className="dropdown-item text-white" >شاعری </li>
                            <li className="dropdown-item text-white" >بچے </li>
                            <li className="dropdown-item text-white" >خواتین </li>
                        </ul>

                    </button>

                </li>
            </ul>
        </section>
    );
}

export default Category;
