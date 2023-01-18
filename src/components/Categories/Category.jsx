import React from 'react';

function Category() {
    return (
        <section id='category'>
            <ul className='d-flex category-list text-white bg-black bg-opacity-75 ' type='none'>
                <li className='ms-3 align-items-center d-flex fw-semibold'>مرکزی صفحہ</li>
                <li className='ms-3 align-items-center d-flex fw-semibold'>اخبار</li>
                <li className='ms-3 align-items-center d-flex fw-semibold'>انٹرنیشنل</li>
                <li className='ms-3 align-items-center d-flex fw-semibold'>شاعری</li>
                <li className='ms-3 align-items-center d-flex fw-semibold'>بچے</li>
                <li className='ms-3 align-items-center d-flex fw-semibold'>خواتین</li>

                <li className='dropdown ms-3 align-items-center d-flex fw-semibold' >
                    <button className='btn btn-default dropdown-toggle text-white fw-semibold dropbtn ' type="button" data-toggle="dropdown" data-hover="dropdown"> مزید <span className="caret"></span>


                        <ul class="dropdown-menu dropdown-content text-end bg-black bg-opacity-75 mt-2 rounded-0">
                            <li class="dropdown-item text-white "> اخبار </li>
                            <li class="dropdown-item text-white" >انٹرنیشنل</li>
                            <li class="dropdown-item text-white" >شاعری </li>
                            <li class="dropdown-item text-white" >بچے </li>
                            <li class="dropdown-item text-white" >خواتین </li>
                        </ul>

                    </button>

                </li>
            </ul>
        </section>
    );
}

export default Category;
