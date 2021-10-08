import React, { useState } from 'react';
import { Button, Htag, Input, P, Rating, Tag, Textarea } from '../components';
import { withLayout } from '../layout/Layout';
import { GetStaticProps } from "next";
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';

function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      {/*<Htag tag="h1">Текст</Htag>*/}
      {/*<Button appearence="primary" arrow="right">*/}
      {/*  Кнопка*/}
      {/*</Button>*/}
      {/*<Button appearence="ghost" arrow="down">*/}
      {/*  Кнопка*/}
      {/*</Button>*/}
      {/*<P size="l"> Большой</P>*/}
      {/*<P>Средний</P>*/}
      {/*<P size="s">Маленький</P>*/}
      {/*<Tag size="s" color="red">*/}
      {/*  Facebook*/}
      {/*</Tag>*/}
      {/*<Tag size="m" color="green">*/}
      {/*  VK*/}
      {/*</Tag>*/}
      {/*<Rating rating={rating} isEditable setRating={setRating} />*/}
      {/*<Input placeholder='текст'/>*/}
      {/*<Textarea placeholder='текст'/>*/}
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;
    const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory
    });
    return {
        props: {
            menu,
            firstCategory
        }
    };
};

interface HomeProps extends Record<string, unknown>{
    menu: MenuItem[],
    firstCategory: number,
}