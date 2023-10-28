export type IServiceReponse = {
  dataUpdatedAt: Date;
  isError: boolean;
  isLoading: boolean;
  isLoadingError: boolean;
};

export type ILoading = {
  loading: boolean;
  show: boolean;
  update: boolean;
  delete: boolean;
};
