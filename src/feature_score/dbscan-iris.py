from sklearn.datasets import load_iris
iris = load_iris()

from sklearn.cluster import DBSCAN
dbscan = DBSCAN(eps=0.2, metric='euclidean', min_samples=5)

import numpy


# DBSCAN(eps=0.5, metric='euclidean', min_samples=5,random_state=111)

iris = load_iris()
print (iris.feature_names)

X, y = load_iris(return_X_y=True)

# X = numpy.delete(X, 0, 0)

X = numpy.delete(X, 1, 0)

# X = numpy.delete(X, 2, 0)

# X = numpy.delete(X, 3, 0)

# X = numpy.delete(X, 0, 0)
# X = numpy.delete(X, 0, 0)

# X = numpy.delete(X, 0, 0)
# X = numpy.delete(X, 1, 0)

# X = numpy.delete(X, 0, 0)
# X = numpy.delete(X, 2, 0)

# X = numpy.delete(X, 0, 0)
# X = numpy.delete(X, 2, 0)

# X = numpy.delete(X, 1, 0)
# X = numpy.delete(X, 1, 0)

# X = numpy.delete(X, 1, 0)
# X = numpy.delete(X, 2, 0)


# X = numpy.delete(X, 0, 0)
# X = numpy.delete(X, 1, 0)

# X = numpy.delete(X, 2, 0)
# X = numpy.delete(X, 2, 0)

# x = numpy.delete(X, 1, 0)
# x = numpy.delete(X, 1, 0)
# x = numpy.delete(X, 1, 0)

# x = numpy.delete(X, 0, 0)
# x = numpy.delete(X, 1, 0)
# x = numpy.delete(X, 1, 0)

# x = numpy.delete(X, 0, 0)
# x = numpy.delete(X, 0, 0)
# x = numpy.delete(X, 1, 0)

dbscan.fit(X)


# from sklearn.decomposition import PCA
# import matplotlib.pyplot as pl


# pca = PCA(n_components=2).fit(X)
# pca_2d = pca.transform(X)

# for i in range(0, pca_2d.shape[0]):
#     if dbscan.labels_[i] == 0:
#         c1 = pl.scatter(pca_2d[i,0],pca_2d[i,1],c='r',marker='+')
#     elif dbscan.labels_[i] == 1:
#         c2 = pl.scatter(pca_2d[i,0],pca_2d[i,1],c='g', marker='o')
#     elif dbscan.labels_[i] == -1:
#         c3 = pl.scatter(pca_2d[i,0],pca_2d[i,1],c='b', marker='*')

# pl.legend([c1, c2, c3], ['Cluster 1', 'Cluster 2', 'Noise'])
# pl.title('DBSCAN finds 2 clusters and noise')
# pl.show()


from sklearn.metrics import silhouette_score
res_sil = silhouette_score(X, dbscan.labels_)

print (res_sil)