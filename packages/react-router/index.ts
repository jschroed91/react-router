import type { Action as NavigationType, Location, Path, To } from "history";
import type {
  MemoryRouterProps,
  NavigateProps,
  RouteProps,
  PathRouteProps,
  LayoutRouteProps,
  IndexRouteProps,
  RouterProps,
  RoutesProps,
} from "./lib/components";
import {
  MemoryRouter,
  Navigate,
  Route,
  Router,
  Routes,
  createRoutesFromChildren,
  renderMatches,
} from "./lib/components";
import type { Navigator } from "./lib/context";
import {
  NavigationContext,
  LocationContext,
  RouteContext,
} from "./lib/context";
import type {
  NavigateFunction,
  NavigateOptions,
  OutletProps,
} from "./lib/hooks";
import {
  Outlet,
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
} from "./lib/hooks";
import type {
  Params,
  PathMatch,
  PathPattern,
  RouteMatch,
  RouteObject,
} from "./lib/router";
import {
  generatePath,
  matchPath,
  matchRoutes,
  resolvePath,
} from "./lib/router";

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
