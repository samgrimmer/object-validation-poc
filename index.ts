import 'reflect-metadata';

import { IsInt, Min, IsEmail, validate, IsNotEmpty } from 'class-validator';

import { plainToClass } from 'class-transformer';

const assert = require('assert');

interface IPerson {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
}

class Person implements IPerson {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsInt()
  @Min(1)
  age: number;

  @IsEmail()
  email: string;
}

const doYaThang = async () => {
  const fawledObject: Object = {
    firstName1: 'sam',
    lastName: 'grimmer',
  };

  const person = plainToClass(Person, fawledObject);

  const validationErrors = await validate(person);

  assert.equal(validationErrors.length, 3);
};

doYaThang();
