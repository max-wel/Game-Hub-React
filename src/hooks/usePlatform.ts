import usePlatforms from "./usePlatforms";

const usePlatform = (selectedPlatformId?: number) => {
  const { data, error } = usePlatforms();

  const platform = data?.results.find(
    (platform) => platform.id == selectedPlatformId,
  );
  return { platform, error };
};

export default usePlatform;
