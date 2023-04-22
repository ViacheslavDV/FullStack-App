import { NextPage } from "next";

export type TypeRoles = {
  isAuthorized?: boolean;
};

export type NextPageAuth<P = {}> = NextPage<P> & TypeRoles;

export type TypeComponentAuthFields = { Component: TypeRoles };
