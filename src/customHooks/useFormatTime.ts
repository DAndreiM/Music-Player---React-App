export const useFormatTime = () => {
    const formatTime = (time: number): string => {
        const minutes: number = Math.floor(time / 60);
        const seconds: number = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
      };

      return formatTime;
}