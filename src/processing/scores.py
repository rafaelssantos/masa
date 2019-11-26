import sys
import numpy
import scipy.io

from skfeature.function.similarity_based import lap_score
from skfeature.function.similarity_based import SPEC
from skfeature.function.sparse_learning_based import MCFS
from skfeature.function.sparse_learning_based import NDFS
from skfeature.function.sparse_learning_based import UDFS


from skfeature.utility import construct_W
from skfeature.utility.sparse_learning import feature_ranking





def feature_scores_lap(data):
    kwargs_W = {"metric": "euclidean", "neighbor_mode": "knn", "weight_mode": "heat_kernel", "k": 5, 't': 1}
    W = construct_W.construct_W(data, **kwargs_W)

    return lap_score.lap_score(data, W=W)





def feature_scores_SPEC(data):
    kwargs = {'style': 0}

    return SPEC.spec(data, **kwargs)





def feature_scores_MCFS(data, n_features, n_clusters=20):
    kwargs_W = {"metric": "euclidean", "neighbor_mode": "knn", "weight_mode": "heat_kernel", "k": 5, 't': 1}
    W = construct_W.construct_W(data, **kwargs_W)

    return MCFS.mcfs(data, n_selected_features=n_features, W=W, n_clusters=n_clusters).max(1)





def feature_scores_NDFS(data, n_clusters=20):
    kwargs = {"metric": "euclidean", "neighborMode": "knn", "weightMode": "heatKernel", "k": 5, 't': 1}
    W = construct_W.construct_W(data, **kwargs)

    # obtain the feature weight matrix
    Weight = NDFS.ndfs(data, W=W, n_clusters=n_clusters)
    return (Weight * Weight).sum(1)



def feature_scores_UDFS(data, gamma=0.1, n_clusters=20):
    Weight = UDFS.udfs(data, gamma=gamma, n_clusters=n_clusters)
    return (Weight * Weight).sum(1)






def main():
    mat =  numpy.loadtxt(sys.argv[2], delimiter = ",")
    res_lap = feature_scores_UDFS(mat);
    
    print (res_lap)


if __name__ == '__main__':
    main()