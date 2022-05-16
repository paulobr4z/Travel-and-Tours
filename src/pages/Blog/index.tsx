import React, { useEffect } from 'react';
import { FirstSection } from '../../components/FirstSection';
import { Footer } from '../../components/Footer';

import imgPost from '../../assets/img/post.jpg';

import {
  BlogContainer,
  BlogTitle,
  BlogWrapper,
  BlogMain,
  BlogAside,
  PostContainer,
  PopularContainer,
  Pagination,
} from './styles';

const Blog: React.FC = () => {
  useEffect(() => {
    document.title = 'Blog | Travel & Tours';
  });
  return (
    <>
      <FirstSection
        title='Blog'
        srcImage='https://raw.githubusercontent.com/paulobr4z/Travel-and-Tours/master/src/assets/img/blog.jpg'
      />
      <BlogContainer>
        <BlogTitle>
          <h1>Last posts</h1>
        </BlogTitle>
      <BlogWrapper>
          <BlogMain>
            <PostContainer>
              <div className="postImage">
                <img src={imgPost} alt="news"/>
              </div>
              <div className="postTitle">
                <p>MARCH 18, 2021</p>
                <h2>Lorem ipsum text</h2>
              </div>
            </PostContainer>
            <PostContainer>
              <div className="postImage">
                <img src={imgPost} alt="news"/>
              </div>
              <div className="postTitle">
                <p>MARCH 19, 2021</p>
                <h2>Lorem ipsum text</h2>
              </div>
            </PostContainer>
            <PostContainer>
              <div className="postImage">
                <img src={imgPost} alt="news"/>
              </div>
              <div className="postTitle">
                <p>MARCH 20, 2021</p>
                <h2>Lorem ipsum text</h2>
              </div>
            </PostContainer>
            <PostContainer>
              <div className="postImage">
                <img src={imgPost} alt="news"/>
              </div>
              <div className="postTitle">
                <p>MARCH 21, 2021</p>
                <h2>Lorem ipsum text</h2>
              </div>
            </PostContainer>
            <PostContainer>
              <div className="postImage">
                <img src={imgPost} alt="news"/>
              </div>
              <div className="postTitle">
                <p>MARCH 22, 2021</p>
                <h2>Lorem ipsum text</h2>
              </div>
            </PostContainer>
            <PostContainer>
              <div className="postImage">
                <img src={imgPost} alt="news"/>
              </div>
              <div className="postTitle">
                <p>MARCH 23, 2021</p>
                <h2>Lorem ipsum text</h2>
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
                <p>MARCH 24, 2021</p>
                <h3>Lorem ipsum text</h3>
              </div>
            </PopularContainer>
            <PopularContainer>
              <div className="popularImage">
                <img src={imgPost} alt="news"/>
              </div>
              <div className="popularTitle">
                <p>MARCH 25, 2021</p>
                <h3>Lorem ipsum text</h3>
              </div>
            </PopularContainer>
            <PopularContainer>
              <div className="popularImage">
                <img src={imgPost} alt="news"/>
              </div>
              <div className="popularTitle">
                <p>MARCH 26, 2021</p>
                <h3>Lorem ipsum text</h3>
              </div>
            </PopularContainer>
            <PopularContainer>
              <div className="popularImage">
                <img src={imgPost} alt="news"/>
              </div>
              <div className="popularTitle">
                <p>MARCH 27, 2021</p>
                <h3>Lorem ipsum text</h3>
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
