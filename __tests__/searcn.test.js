const fetch = require('node-fetch');
const {
  search,
  searchArtists,
  searchAlbums,
  searchTracks,
  searchPlaylists,
} = require('../src/search');

const { HEADERS } = require('../src/config');

jest.mock('node-fetch');

describe('Spotify Wrapper', () => {
  beforeEach(() => {
    fetch.mockResolvedValue(
      Promise.resolve({ json: () => Promise.resolve({ body: 'json' }) })
    );
  });
  afterEach(() => {
    fetch.mockClear();
  });

  describe('Smoke Test', () => {
    it('should call fetch', () => {
      search();

      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });

  describe('Generic Search', () => {
    it('should call correct url to fetch with one type', () => {
      search('vintageculture', 'artist');

      expect(fetch).toHaveBeenCalledWith(
        'https://api.spotify.com/v1/search?q=vintageculture&type=artist',
        HEADERS
      );
    });

    it('should call correct url to fetch with two type', () => {
      search('vintageculture', ['artist,album']);

      expect(fetch).toHaveBeenCalledWith(
        'https://api.spotify.com/v1/search?q=vintageculture&type=artist,album',
        HEADERS
      );
    });

    it('should return JSON data from promise', () => {
      const artistAndAlbum = search('vintageculture', 'artist');

      return expect(artistAndAlbum).resolves.toStrictEqual({ body: 'json' });
    });
  });

  describe('Search Artist', () => {
    it('should call fetch function ', () => {
      searchArtists();
      expect(fetch).toHaveBeenCalledTimes(1);
    });

    it('should called with correct url', () => {
      searchArtists('vintageculture');
      expect(fetch).toHaveBeenCalledWith(
        'https://api.spotify.com/v1/search?q=vintageculture&type=artist',
        HEADERS
      );
    });
  });

  describe('Search Album', () => {
    it('should call fetch function ', () => {
      searchAlbums();
      expect(fetch).toHaveBeenCalledTimes(1);
    });

    it('should called with correct url', () => {
      searchAlbums('vintageculture');
      expect(fetch).toHaveBeenCalledWith(
        'https://api.spotify.com/v1/search?q=vintageculture&type=album',
        HEADERS
      );
    });
  });

  describe('Search Track', () => {
    it('should call fetch function ', () => {
      searchTracks();
      expect(fetch).toHaveBeenCalledTimes(1);
    });

    it('should called with correct url', () => {
      searchTracks('vintageculture');
      expect(fetch).toHaveBeenCalledWith(
        'https://api.spotify.com/v1/search?q=vintageculture&type=track',
        HEADERS
      );
    });
  });

  describe('Search Playlist', () => {
    it('should call fetch function ', () => {
      searchPlaylists();
      expect(fetch).toHaveBeenCalledTimes(1);
    });

    it('should called with correct url', () => {
      searchPlaylists('vintageculture');
      expect(fetch).toHaveBeenCalledWith(
        'https://api.spotify.com/v1/search?q=vintageculture&type=playlist',
        HEADERS
      );
    });
  });
});
