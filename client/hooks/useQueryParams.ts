import { useSearchParams } from "react-router-dom";
import { useCallback, useEffect, useMemo, useState } from "react";
import queryString from "query-string";

type ParamsType = Record<string, string | string[]>;
type SetParamsType = (
  params: Record<string, any>,
  navigateOptions?: {
    replace?: boolean | undefined;
    state?: object | null | undefined;
  }
) => void;

const useQueryParams = (
  defaultInit?:
    | Record<string, any>
    | ((x: Record<string, any>) => Record<string, any>)
): [ParamsType, SetParamsType] => {
  const [navigateParams, setNavigateParams] = useState<{
    params?: Record<string, any>;
    navigateOptions?: {
      replace?: boolean | undefined;
      state?: object | null | undefined;
    };
  }>();

  const [searchParams, setSearchParams] = useSearchParams();

  const queryParams = useMemo(() => {
    const qp = queryString.parse(searchParams.toString());
    if (typeof defaultInit === "function") {
      return defaultInit(qp);
    }
    return { ...defaultInit, ...qp };
  }, [searchParams, defaultInit]);

  useEffect(() => {
    if (navigateParams) {
      setSearchParams(
        queryString.stringify(navigateParams.params || {}),
        navigateParams.navigateOptions
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigateParams]);

  const setQueryParams = useCallback((params, navigateOptions) => {
    setNavigateParams({ params, navigateOptions });
  }, []);

  return [queryParams, setQueryParams];
};

export default useQueryParams;
