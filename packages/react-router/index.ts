import type { Action as NavigationType, Location, Path, To } from "history";
import type {
  Navigator,
  MemoryRouterProps,
  NavigateProps,
  OutletProps,
  RouteProps,
  PathRouteProps,
  LayoutRouteProps,
  IndexRouteProps,
  RouterProps,
  RoutesProps,
  NavigateFunction,
  NavigateOptions,
  // @ts-ignore
} from "./lib/components.tsx";
import {
  MemoryRouter,
  Navigate,
  Outlet,
  Route,
  Router,
  Routes,
  createRoutesFromChildren,
  renderMatches,
  // @ts-ignore
} from "./lib/components.tsx";
import {
  NavigationContext,
  LocationContext,
  RouteContext,
  // @ts-ignore
} from "./lib/context.ts";
import {
  useHref,
  useInRouterContext,
  useLocation,
  useNavigationType,
  useMatch,
  useNavigate,
  useOutletContext,
  useOutlet,
  useParams,
  useResolvedPath,
  useRoutes,
  // @ts-ignore
} from "./lib/hooks.tsx";
import type {
  Params,
  PathMatch,
  PathPattern,
  RouteMatch,
  RouteObject,
  // @ts-ignore
} from "./lib/router.ts";
import {
  generatePath,
  matchPath,
  matchRoutes,
  resolvePath,
  // @ts-ignore
} from "./lib/router.ts";

// Export the react-router public API
export type {
  Location,
  Path,
  To,
  NavigationType,
  Navigator,
  Params,
  MemoryRouterProps,
  NavigateProps,
  OutletProps,
  RouteProps,
  PathRouteProps,
  LayoutRouteProps,
  IndexRouteProps,
  RouterProps,
  RoutesProps,
  NavigateFunction,
  NavigateOptions,
  RouteObject,
  RouteMatch,
  PathPattern,
  PathMatch,
};

export {
  MemoryRouter,
  Navigate,
  Outlet,
  Route,
  Router,
  Routes,
  useHref,
  useInRouterContext,
  useLocation,
  useNavigationType,
  useMatch,
  useNavigate,
  useOutletContext,
  useOutlet,
  useParams,
  useResolvedPath,
  useRoutes,
  createRoutesFromChildren,
  generatePath,
  matchRoutes,
  renderMatches,
  matchPath,
  resolvePath,
};

///////////////////////////////////////////////////////////////////////////////
// DANGER! PLEASE READ ME!
// We provide these exports as an escape hatch in the event that you need any
// routing data that we don't provide an explicit API for. With that said, we
// want to cover your use case if we can, so if you feel the need to use these
// we want to hear from you. Let us know what you're building and we'll do our
// best to make sure we can support you!
//
// We consider these exports an implementation detail and do not guarantee
// against any breaking changes, regardless of the semver release. Use with
// extreme caution and only if you understand the consequences. Godspeed.
///////////////////////////////////////////////////////////////////////////////

/** @internal */
export {
  NavigationContext as UNSAFE_NavigationContext,
  LocationContext as UNSAFE_LocationContext,
  RouteContext as UNSAFE_RouteContext,
};
