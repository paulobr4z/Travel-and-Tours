import React from 'react';
import Footer from '../../components/Footer';

import imgPost from '../../assets/img/post.jpg';

import {
  Background,
  HeaderContainer,
  BlogContainer,
  BlogWrapper,
  BlogMain,
  BlogAside,
  PostContainer,
  PopularContainer,
  Pagination,
} from './styles';

const Blog: React.FC = () => {
  return (
    <>
      <Background />
      <HeaderContainer>
        <h1>Blog</h1>
        <h3>
          Lorem ipsum is placeholder text commonly used in 
          the graphic, print, and publishing industries.
        </h3>
      </HeaderContainer>
      <BlogContainer>
      <BlogWrapper>
          <BlogMain>
            <PostContainer>
              <div className="postImage">
                <img src={imgPost} alt="news"/>
              </div>
              <div className="postTitle">
                <p>FEBRUARY 26, 2018</p>
                <h2>Free Template by Colorlib</h2>
              </div>
            </PostContainer>
            <PostContainer>
              <div className="postImage">
                <img src={imgPost} alt="news"/>
              </div>
              <div className="postTitle">
                <p>FEBRUARY 26, 2018</p>
                <h2>Free Template by Colorlib</h2>
              </div>
            </PostContainer>
            <PostContainer>
              <div className="postImage">
                <img src={imgPost} alt="news"/>
              </div>
              <div className="postTitle">
                <p>FEBRUARY 26, 2018</p>
                <h2>Free Template by Colorlib</h2>
              </div>
            </PostContainer>
            <PostContainer>
              <div className="postImage">
                <img src={imgPost} alt="news"/>
              </div>
              <div className="postTitle">
                <p>FEBRUARY 26, 2018</p>
                <h2>Free Template by Colorlib</h2>
              </div>
            </PostContainer>
            <PostContainer>
              <div className="postImage">
                <img src={imgPost} alt="news"/>
              </div>
              <div className="postTitle">
                <p>FEBRUARY 26, 2018</p>
                <h2>Free Template by Colorlib</h2>
              </div>
            </PostContainer>
            <PostContainer>
              <div className="postImage">
                <img src={imgPost} alt="news"/>
              </div>
              <div className="postTitle">
                <p>FEBRUARY 26, 2018</p>
                <h2>Free Template by Colorlib</h2>
              </div>
            </PostContainer>

          </BlogMain>

          <BlogAside>
            <div className="searchContainer">
              <input placeholder="Search..." type="text"/>
            </div>
            <PopularContainer>
              <div className="popularImage">
                <img src={imgPost} alt="news"/>
              </div>
              <div className="popularTitle">
                <p>FEBRUARY 26, 2018</p>
                <h3>Free Template by Colorlib</h3>
              </div>
            </PopularContainer>
            <PopularContainer>
              <div className="popularImage">
                <img src={imgPost} alt="news"/>
              </div>
              <div className="popularTitle">
                <p>FEBRUARY 26, 2018</p>
                <h3>Free Template by Colorlib</h3>
              </div>
            </PopularContainer>
            <PopularContainer>
              <div className="popularImage">
                <img src={imgPost} alt="news"/>
              </div>
              <div className="popularTitle">
                <p>FEBRUARY 26, 2018</p>
                <h3>Free Template by Colorlib</h3>
              </div>
            </PopularContainer>
            <PopularContainer>
              <div className="popularImage">
                <img src={imgPost} alt="news"/>
              </div>
              <div className="popularTitle">
                <p>FEBRUARY 26, 2018</p>
                <h3>Free Template by Colorlib</h3>
              </div>
            </PopularContainer>
          </BlogAside>
          
          <Pagination>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </Pagination>
        
        </BlogWrapper>

      </BlogContainer>

      <Footer />

    </>
  );
};

export default Blog;
