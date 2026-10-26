from setuptools import setup, find_packages

setup(
    name='apiverve_urllookup',
    version='1.2.3',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='URL Lookup resolves any web address to its hosting server IP address, country, and continent in real time. Paid plans add city, state, coordinates, timezone, and EU membership status.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/urllookup?utm_source=pypi&utm_medium=referral&utm_content=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
