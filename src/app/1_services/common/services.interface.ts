/*
 * Entity — обеъкт, который получается из
 * DTO, который в дальнейшем будет сохранен
 * в хранилище Redux’а. Entity обладает рядом новых свойств, которые необходимы для работы приложения.
 *
 * Концепт DTO-Entity-Model
 * Каждая сущность (что-то полученное извне, например, данные с сервера) может быть разложена на 3 базовых типа:
 * DTO (Data Transfer Object) — объект получаемый с backend’а или внешнего сервиса.
 * DTO никогда не переопределяется и всегда соответствует response’у сервера
 *
 * Entity — обеъкт, который получается из DTO, который в дальнейшем будет сохранен в хранилище Redux’а.
 * Entity обладает рядом новых свойств, которые необходимы для работы приложения.
 *
 * Model — объект, который наследуется от Entity и добавляет ряд свойств, которые не должны быть сохранены в хранилище.
 * Примером сущности может быть реализация дат. Например с сервера, возвращается поле created — которое содержит дату
 * создания сущности, в виде строки.
 * Для того, чтобы всегда иметь свойство типа Date, можно у модели создать новое поле — createdDate: Date и его
 * заполнять в момент получения из хранилища Redux.
 */


import { Entity } from 'src/app/core/entity.interface';

export interface ServicesDto {
  readonly id: number;
  readonly title: string;
  readonly image: string;
  readonly added: boolean;
}

export interface ServicesEntity {
  id: number;
  title: string;
  image: string;
  added: boolean;
}

export interface Service extends ServicesEntity {}

// нужен ли enum

