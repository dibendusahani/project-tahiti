import React from 'react';

import makeStyles from '@mui/styles/makeStyles';

// Components
import ArticleCard from './ArticleCard';
import TitleWrapper from '../../shared/TitleWrapper';
import { Container } from '@mui/system';

function ArticleCardStack({ articleList, title }) {
  const classes = useStyles();
  return (
    <Container>
      {title ? <TitleWrapper title={title} /> : false}
      <div className={classes.root}>
        {articleList?.map((article, index) => (
          <ArticleCard
            key={article.id}
            article={article}
            isLastInStack={index === 2}
            smallArticleClassName={classes.smallArticle}
            regularArticleClassName={classes.regularArticle}
          />
        ))}
      </div>
    </Container>
  );
}

export default ArticleCardStack;

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '30px',
    display: 'grid',
    gridTemplateColumns: '1fr',
    justifyItems: 'center',
    gap: '10px',

    [theme.breakpoints.up('sm')]: {
      justifyContent: 'center',
      gridTemplateColumns: 'repeat(1, minmax(370px, 600px))',
    },

    [theme.breakpoints.up('md')]: {
      justifyContent: 'center',
      gridTemplateColumns: 'repeat(2, minmax(370px, 600px))',
    },

    [theme.breakpoints.up('lg')]: {
      justifyItems: 'start',
      gridTemplateColumns: 'repeat(3, minmax(370px, 600px))',
    },
  },
  smallArticle: {
    gridColumn: '1/2',
  },
  regularArticle: {
    alignSelf: 'center',
  },
}));
