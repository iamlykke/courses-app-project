/* eslint-disable @typescript-eslint/ban-ts-comment */
import { SearchProps } from "./Search.props";
import styles from "./Search.module.css";
import cn from "classnames";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { useState } from "react";
import SearchIcon from "./search.svg";
import { useRouter } from "next/router";

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();
  const onSearch = () => {
    router.push({
      pathname: "/search",
      query: {
        q: search,
      },
    });
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className={cn(className, styles.search)} {...props}>
      <Input
        className={styles.input}
        placeholder="Поиск..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        // @ts-ignore
        onKeyDown={handleKeyDown}
      />
      <Button appearence="primary" className={styles.button} onClick={onSearch}>
        <SearchIcon />
      </Button>
    </div>
  );
};
