/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as publicPublicImport } from './routes/(public)/_public'
import { Route as authAuthImport } from './routes/(auth)/_auth'
import { Route as authAuthIndexImport } from './routes/(auth)/_auth.index'
import { Route as publicPublicSignUpImport } from './routes/(public)/_public.sign-up'
import { Route as publicPublicSignInImport } from './routes/(public)/_public.sign-in'

// Create Virtual Routes

const publicImport = createFileRoute('/(public)')()
const authImport = createFileRoute('/(auth)')()

// Create/Update Routes

const publicRoute = publicImport.update({
  id: '/(public)',
  getParentRoute: () => rootRoute,
} as any)

const authRoute = authImport.update({
  id: '/(auth)',
  getParentRoute: () => rootRoute,
} as any)

const publicPublicRoute = publicPublicImport.update({
  id: '/_public',
  getParentRoute: () => publicRoute,
} as any)

const authAuthRoute = authAuthImport.update({
  id: '/_auth',
  getParentRoute: () => authRoute,
} as any)

const authAuthIndexRoute = authAuthIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => authAuthRoute,
} as any)

const publicPublicSignUpRoute = publicPublicSignUpImport.update({
  id: '/sign-up',
  path: '/sign-up',
  getParentRoute: () => publicPublicRoute,
} as any)

const publicPublicSignInRoute = publicPublicSignInImport.update({
  id: '/sign-in',
  path: '/sign-in',
  getParentRoute: () => publicPublicRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/(auth)': {
      id: '/(auth)'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof authImport
      parentRoute: typeof rootRoute
    }
    '/(auth)/_auth': {
      id: '/(auth)/_auth'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof authAuthImport
      parentRoute: typeof authRoute
    }
    '/(public)': {
      id: '/(public)'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof publicImport
      parentRoute: typeof rootRoute
    }
    '/(public)/_public': {
      id: '/(public)/_public'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof publicPublicImport
      parentRoute: typeof publicRoute
    }
    '/(public)/_public/sign-in': {
      id: '/(public)/_public/sign-in'
      path: '/sign-in'
      fullPath: '/sign-in'
      preLoaderRoute: typeof publicPublicSignInImport
      parentRoute: typeof publicPublicImport
    }
    '/(public)/_public/sign-up': {
      id: '/(public)/_public/sign-up'
      path: '/sign-up'
      fullPath: '/sign-up'
      preLoaderRoute: typeof publicPublicSignUpImport
      parentRoute: typeof publicPublicImport
    }
    '/(auth)/_auth/': {
      id: '/(auth)/_auth/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof authAuthIndexImport
      parentRoute: typeof authAuthImport
    }
  }
}

// Create and export the route tree

interface authAuthRouteChildren {
  authAuthIndexRoute: typeof authAuthIndexRoute
}

const authAuthRouteChildren: authAuthRouteChildren = {
  authAuthIndexRoute: authAuthIndexRoute,
}

const authAuthRouteWithChildren = authAuthRoute._addFileChildren(
  authAuthRouteChildren,
)

interface authRouteChildren {
  authAuthRoute: typeof authAuthRouteWithChildren
}

const authRouteChildren: authRouteChildren = {
  authAuthRoute: authAuthRouteWithChildren,
}

const authRouteWithChildren = authRoute._addFileChildren(authRouteChildren)

interface publicPublicRouteChildren {
  publicPublicSignInRoute: typeof publicPublicSignInRoute
  publicPublicSignUpRoute: typeof publicPublicSignUpRoute
}

const publicPublicRouteChildren: publicPublicRouteChildren = {
  publicPublicSignInRoute: publicPublicSignInRoute,
  publicPublicSignUpRoute: publicPublicSignUpRoute,
}

const publicPublicRouteWithChildren = publicPublicRoute._addFileChildren(
  publicPublicRouteChildren,
)

interface publicRouteChildren {
  publicPublicRoute: typeof publicPublicRouteWithChildren
}

const publicRouteChildren: publicRouteChildren = {
  publicPublicRoute: publicPublicRouteWithChildren,
}

const publicRouteWithChildren =
  publicRoute._addFileChildren(publicRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof authAuthIndexRoute
  '/sign-in': typeof publicPublicSignInRoute
  '/sign-up': typeof publicPublicSignUpRoute
}

export interface FileRoutesByTo {
  '/': typeof authAuthIndexRoute
  '/sign-in': typeof publicPublicSignInRoute
  '/sign-up': typeof publicPublicSignUpRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/(auth)': typeof authRouteWithChildren
  '/(auth)/_auth': typeof authAuthRouteWithChildren
  '/(public)': typeof publicRouteWithChildren
  '/(public)/_public': typeof publicPublicRouteWithChildren
  '/(public)/_public/sign-in': typeof publicPublicSignInRoute
  '/(public)/_public/sign-up': typeof publicPublicSignUpRoute
  '/(auth)/_auth/': typeof authAuthIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/sign-in' | '/sign-up'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/sign-in' | '/sign-up'
  id:
    | '__root__'
    | '/(auth)'
    | '/(auth)/_auth'
    | '/(public)'
    | '/(public)/_public'
    | '/(public)/_public/sign-in'
    | '/(public)/_public/sign-up'
    | '/(auth)/_auth/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  authRoute: typeof authRouteWithChildren
  publicRoute: typeof publicRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  authRoute: authRouteWithChildren,
  publicRoute: publicRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/(auth)",
        "/(public)"
      ]
    },
    "/(auth)": {
      "filePath": "(auth)",
      "children": [
        "/(auth)/_auth"
      ]
    },
    "/(auth)/_auth": {
      "filePath": "(auth)/_auth.tsx",
      "parent": "/(auth)",
      "children": [
        "/(auth)/_auth/"
      ]
    },
    "/(public)": {
      "filePath": "(public)",
      "children": [
        "/(public)/_public"
      ]
    },
    "/(public)/_public": {
      "filePath": "(public)/_public.tsx",
      "parent": "/(public)",
      "children": [
        "/(public)/_public/sign-in",
        "/(public)/_public/sign-up"
      ]
    },
    "/(public)/_public/sign-in": {
      "filePath": "(public)/_public.sign-in.tsx",
      "parent": "/(public)/_public"
    },
    "/(public)/_public/sign-up": {
      "filePath": "(public)/_public.sign-up.tsx",
      "parent": "/(public)/_public"
    },
    "/(auth)/_auth/": {
      "filePath": "(auth)/_auth.index.tsx",
      "parent": "/(auth)/_auth"
    }
  }
}
ROUTE_MANIFEST_END */
