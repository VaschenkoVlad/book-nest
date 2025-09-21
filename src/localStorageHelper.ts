
import type { author } from './types/authorType';
import type { Category } from './types/categoryType';
import type { Book } from './types/bookType';

export function saveToLocalStorage(key: string, value: any): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Error saving to localStorage", error);
  }
}
function getFromLocalStorage<T>(key: string):T | null 
{
  try {
    const value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value) as T;
    }
  } catch (error) {
    console.error("Error getting from localStorage", error);
  }
  return null;
}

export function removeFromLocalStorage(key: string): void {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("Error removing from localStorage", error);
  }
}
export function getCategories(): Category[] | null
{
  return getFromLocalStorage<Category[]>("categories") 
}

export function getBooks(): Book[] | null
{
  return getFromLocalStorage<Book[]>("books") 
}

export function getAuthors(): author[] | null
{
  return getFromLocalStorage<author[]>("authors") 
}

const authorsData: author[] = [
  { id: 1, name: "Іван Франко" },
  { id: 2, name: "Тарас Шевченко" },
  { id: 3, name: "Леся Українка" },
  { id: 4, name: "Михайло Коцюбинський" },
  { id: 5, name: "Ольга Кобилянська" }
];

const categoriesData: Category[] = [
  { 
    id: 1, 
    name: "Художня література", 
    email: "fiction@bookstore.com", 
    password: "password123",
    comments: []
  },
  { 
    id: 2, 
    name: "Наукова література", 
    email: "science@bookstore.com", 
    password: "password123",
    comments: []
  },
  { 
    id: 3, 
    name: "Дитяча література", 
    email: "children@bookstore.com", 
    password: "password123",
    comments: []
  },
  { 
    id: 4, 
    name: "Історична література", 
    email: "history@bookstore.com", 
    password: "password123",
    comments: []
  }
];

const booksData: Book[] = [
  {
    id: 1,
    image: "/img/book1.jpg",
    categoryId: 1,
    title: "Захар Беркут",
    authorId: 1,
    shortDescription: "Історичний роман про боротьбу українського народу",
    description: "Детальний опис історичних подій та героїчних вчинків українського народу в боротьбі за незалежність",
    price: 250,
    discountPrice: 200,
    pageCount: 320,
    createdAt: "2024-01-15",
    updatedAt: "2024-01-15"
  },
  {
    id: 2,
    image: "/img/book2.jpg",
    categoryId: 1,
    title: "Кобзар",
    authorId: 2,
    shortDescription: "Збірка поезій великого українського поета",
    description: "Класичні твори Тараса Шевченка, які стали основою української літератури",
    price: 180,
    discountPrice: 150,
    pageCount: 280,
    createdAt: "2024-01-16",
    updatedAt: "2024-01-16"
  },
  {
    id: 3,
    image: "/img/book3.jpg",
    categoryId: 1,
    title: "Лісова пісня",
    authorId: 3,
    shortDescription: "Драматична поема про кохання та природу",
    description: "Філософський твір про взаємозв'язок людини з природою та вічні теми кохання",
    price: 220,
    discountPrice: 180,
    pageCount: 160,
    createdAt: "2024-01-17",
    updatedAt: "2024-01-17"
  }
];

saveToLocalStorage("authors", authorsData);
saveToLocalStorage("categories", categoriesData);
saveToLocalStorage("books", booksData);
