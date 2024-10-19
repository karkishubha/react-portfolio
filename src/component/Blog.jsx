import React from 'react';

const Blog = () => {
    return (
        <div className="blog">
            <h1 className="blog__title">My Blog</h1>
            <div className="blog__posts">
                <div className="blog__post">
                    <h2 className="blog__post-title">Review of React Class</h2>
                    <p className="blog__post-content">
                        In this blog, I share my insights and experiences from the React class I attended. 
                        I explored various aspects of React, such as component lifecycle, state management, and hooks. 
                        This class has significantly enhanced my ability to build responsive and dynamic web applications.
                    </p>
                </div>
                <div className="blog__post">
                    <h2 className="blog__post-title">Power BI</h2>
                    <p className="blog__post-content">
                        This blog covers my journey in learning Power BI. I learned how to create interactive reports and 
                        dashboards, which helped me visualize data insights effectively. Power BI has become an essential 
                        tool in my data analysis toolkit.
                    </p>
                </div>
                <div className="blog__post">
                    <h2 className="blog__post-title">Probability</h2>
                    <p className="blog__post-content">
                        In this post, I discuss the concepts of probability that I learned in class. 
                        Understanding probability has helped me make informed predictions and decisions based on data analysis. 
                        The practical applications of probability in real-world scenarios are fascinating!
                    </p>
                </div>
                <div className="blog__post">
                    <h2 className="blog__post-title">DSA Class</h2>
                    <p className="blog__post-content">
                        This blog highlights my learning experience in the Data Structures and Algorithms (DSA) class. 
                        I gained insights into various data structures, their implementations, and algorithmic techniques, 
                        which are vital for optimizing performance in software development.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Blog;
