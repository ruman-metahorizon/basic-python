
import requests
from bs4 import BeautifulSoup



def get_content(url):

    page = requests.get(url)

    soup = BeautifulSoup(page.content, "html.parser")

    wrapper = soup.find_all("div", class_="wpb_wrapper")
    print(wrapper)
    # courses = wrapper.find("h3")
    # for course in courses:
    #      ((course.text.strip()))
    # print(f"HTML content ::: {courses}")

if __name__ == '__main__':
    URL = "https://prasadi.edu.np/academic-programs/"
    get_content(URL)