import DayApi from '../../services/DayApi'
import Day from '../../models/Day'
import Paragraph from '../../models/Paragraph'

describe('Services | API | Days', () => {

  let dayAPI;
  let httpClientMock;

  describe('.get()', () => {
    beforeEach(() => {
      httpClientMock = {
        get: jest.fn().mockImplementation(() => Promise.resolve({
          "included": [
            {
              "type": "paragraph",
              "id": "5b5f82c0633153d09309d81d",
              "attributes": {
                "content": [
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vestibulum eros et mattis efficitur.",
                  "uris feugiat magna nisl, non tempus mi feugiat non. Nulla vulputate turpis massa, nec vulputate est rhoncus at."
                ]
              }
            },
            {
              "type": "paragraph",
              "id": "5b5f82d1633153d09309d81e",
              "attributes": {
                "content": [
                  "Mauris id metus nunc. Morbi vel ligula blandit, gravida magna sit amet, malesuada orci. In hac habitasse platea dictumst. Suspendisse potenti.",
                  "enean in dolor sed libero volutpat elementum a non enim. Vivamus et condimentum justo, ac gravida mi."
                ]
              }
            }
          ],
          "data": {
            "type": "day",
            "id": "5b5f81ad633153d09309d81b",
            "attributes": {},
            "relationships": {
              "content": {
                "data": [
                  {
                    "type": "paragraph",
                    "id": "5b5f82c0633153d09309d81d"
                  },
                  {
                    "type": "paragraph",
                    "id": "5b5f82d1633153d09309d81e"
                  }
                ]
              }
            }
          }
        }))
      }

      dayAPI = new DayApi({
        httpClient: httpClientMock
      });
    })


    test('should have a property get()', () => {
      expect(dayAPI.get).toBeDefined();
    })

    test('should contact the API', () => {
      // when
      const promise = dayAPI.get('5b5f81ad633153d09309d81b')

      // then
      return promise.then(() => {
        expect(httpClientMock.get).toHaveBeenCalledWith('/days/5b5f81ad633153d09309d81b');
      })
    })

    test('should return a Day', () => {
      // when
      const promise = dayAPI.get('5b5f81ad633153d09309d81b')

      // then
      return promise.then((day) => {
        expect(day).toBeInstanceOf(Day);
        expect(day).toEqual({
          "id": "5b5f81ad633153d09309d81b",
          "content": [
            {
              "id": "5b5f82c0633153d09309d81d",
              "content": [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vestibulum eros et mattis efficitur.",
                "uris feugiat magna nisl, non tempus mi feugiat non. Nulla vulputate turpis massa, nec vulputate est rhoncus at."
              ]
            },
            new Paragraph({
              "id": "5b5f82d1633153d09309d81e",
              "content": [
                "Mauris id metus nunc. Morbi vel ligula blandit, gravida magna sit amet, malesuada orci. In hac habitasse platea dictumst. Suspendisse potenti.",
                  "enean in dolor sed libero volutpat elementum a non enim. Vivamus et condimentum justo, ac gravida mi."
              ]
            }),
          ]
        })
        expect(day.content[0]).toBeInstanceOf(Paragraph)
      })
    })
  })
})
