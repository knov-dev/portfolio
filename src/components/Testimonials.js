import testimonials from "../assets/testimonials.json"
import React, {useState, useMemo} from 'react';
import Pagination from './Pagination';
import "./TestimonialStyle.css";

let PageSize = 3;

export default function Testimonials() {
    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return testimonials.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    return (
        <>
            <div className="testimonials-container">
                {currentTableData.map(item => {
                    return (
                        <div className="testimonial-card">
                            <div className="testimonial-content">
                                <p>{item.message}</p>
                                <div className="testimonial-title">
                                    <a href={item.url} target="_blank"><h3>{item.name}</h3></a>
                                </div>
                            </div>
                        </div>
                    );
                })}

            </div>
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={testimonials.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
            />
        </>
    )
        ;
}

