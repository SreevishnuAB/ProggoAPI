export interface Task{
  name: string,
  category: string,
  totalPages?: number,
  totalEpisodes?: number,
  currentEpisode?: number,
  currentProgress?: number,
}